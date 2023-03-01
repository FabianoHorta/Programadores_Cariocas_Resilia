const Funcionalidades = require("../models/Funcionalidades");

const deleteFuncionalidades = async (req, res) => {
    
    if (req.params.funcionalidadeId == undefined || req.params.funcionalidadeId == null) {
        return res.redirect("/?error=noUserSpecified");
    };
    
    await User.destroy({
        where: {
            funcionalidadeId: req.params.funcionalidadeId,
        }
    });

    return res.redirect("/");
};

module.exports = { 
   deleteFuncionalidades
};