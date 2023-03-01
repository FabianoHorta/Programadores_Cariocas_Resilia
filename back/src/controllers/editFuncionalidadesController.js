const Funcionalidades = require("../models/Funcionalidades");

const editFuncionalidades = async (req, res) => {
    const { FuncionalidadeId } = req.body;
    
    Funcionalidades.findOne({
        where: {
            FuncionalidadeId: req.params.FuncionalidadeId,
        }
    }).then((Funcionalidade) => {
        Funcionalidade.update({ name, comment });
        return res.redirect("/");
    }).catch(() => {
        return res.redirect("/?error=invalid");
    });
}

module.exports = {
    editFuncionalidades
};