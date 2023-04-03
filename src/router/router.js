var express = require('express');
var router = express.Router();
var { getAllUsuarios  ,addUsuario } = require('../controller/usuarioController')


//ROTAS
router.get('/', (req, res) => {
    res.render('index', { "msg": "form iniciado" });
});

router.get("/formulario", (req, res) => {
    res.render('formulario');
})

router.get("/cidades", (req, res) => {
    res.render('cidades');
})

router.post('/formulario', (req, res) => {
    const body = req.body
    const retorno = addUsuario(body)
    if(retorno !=null){
        res.render('formulario');
    }else{
        res.render('formulario',{
          erro:  {msg:"Ocorreu um erro ao salvar!"}
        });
       
    }
    
})

//ROTA TESTE

router.get("/sobre", (req, res) => {
    res.render('sobre');
})


 router.get('/teste',(req,res)=>{
    res.render('teste', {
        retorno:{msg:"ola isto e uma messagem"}
     } 
    )
 }
 
  
 )

 //getAllUsuarios



module.exports = router;