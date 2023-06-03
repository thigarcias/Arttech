process.env.AMBIENTE_PROCESSO = "desenvolvimento";
// process.env.AMBIENTE_PROCESSO = "producao";

const nodemailer = require('nodemailer');

function configureTransporter() {
    // Configuração do transporte do Nodemailer
    const transporter = nodemailer.createTransport({
      // Configurações do seu provedor de e-mail (ex: Gmail)
      service: 'outlook',
      auth: {
        user: 'lucas.flima@sptech.school',
        pass: '#Gf48546298866',
      },
    });
  
    return transporter;
  }

  

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA = process.env.AMBIENTE_PROCESSO == "desenvolvimento" ? 3333 : 8080;

var app = express();

var indexRouter = require("./src/routes/index");
var usuarioRouter = require("./src/routes/usuarios");
var avisosRouter = require("./src/routes/avisos");
var medidasRouter = require("./src/routes/medidas");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/", indexRouter);
app.use("/usuarios", usuarioRouter);
app.use("/avisos", avisosRouter);
app.use("/medidas", medidasRouter)

app.listen(PORTA, function () {
    console.log(`Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar: http://localhost:${PORTA} \n
    Você está rodando sua aplicação em Ambiente de ${process.env.AMBIENTE_PROCESSO} \n
    \t\tSe "desenvolvimento", você está se conectando ao banco LOCAL (MySQL Workbench). \n
    \t\tSe "producao", você está se conectando ao banco REMOTO (SQL Server em nuvem Azure) \n
    \t\t\t\tPara alterar o ambiente, comente ou descomente as linhas 1 ou 2 no arquivo 'app.js'`);
});

app.post('/enviar-email', (req, res) => {
    const { destinatario, remetente, assunto, corpo } = req.body;
  
    // Obtém uma instância do transporte do Nodemailer
    const transporter = configureTransporter();
  
    const mailOptions = {
      from: 'lucas.flima@sptech.school',
      to: destinatario,
      subject: assunto,
      text: `Remetente: ${remetente}
      ${corpo}`,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).send('Erro ao enviar o e-mail.');
      } else {
        console.log('E-mail enviado: ' + info.response);
        res.send('E-mail enviado com sucesso!');
      }
    });
  });



