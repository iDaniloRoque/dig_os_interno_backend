module.exports = app => {

    const save = async (req, res) => {
        const TB_CLIENTES  = { ...req.body } 
        if(req.params.id) TB_CLIENTES.CLIENTE_CODIGO = req.params.id

    }

    const get = (req, res) => {
        app.db('TB_CLIENTES')
            .select('*' )
            .then(TB_CLIENTES => res.json(TB_CLIENTES))
            .catch(err => res.status(500).send(err))
    }
    
    const getById = (req, res) => {
        app.db('TB_CLIENTES')
            .select('*')
            .where({ CLIENTE_CODIGO: req.params.id })
            .first()
            .then(TB_CLIENTES => res.json(TB_CLIENTES))
            .catch(err => res.status(500).send(err))
    }

    return { save, get, getById }
    
}



/*
CLIENTE_RAZAO'
                            ,'CLIENTE_FANTASIA'
                            ,'CLIENTE_TELEFONE'
                            ,'CLIENTE_CODIGO'
                            ,'CLIENTE_VALIDADE'
                            ,'CLIENTE_CHAVE'
                            ,'CLIENTE_ESTACAO'
                            ,'CLIENTE_LIBERA'
                            ,'CLIENTE_CNPJ'
                            ,'CLIENTE_OBS'
                            ,'CLIENTE_DT_VENC'
                            ,'CLIENTE_ATIVO'
                            ,'TECNICO_ID'
                            ,'CLIENTE_EMAIL'
                            ,'CLIENTE_VALOR'
                            ,'CLIENTE_LEMBRETE'
                            ,'CLIENTE_TELEFONE2'
                            ,'CLIENTE_CONTATO'
                            ,'CLIENTE_IE'
                            ,'CLIENTE_ENDERECO'
                            ,'CLIENTE_BAIRRO'
                            ,'CLIENTE_MUNICIPIO'
                            ,'CLIENTE_UF'
                            ,'CLIENTE_CEP'
                            ,'CLIENTE_RESP_NOME'
                            ,'CLIENTE_RESP_CPF'
                            ,'CLIENTE_RESP_RG'
                            ,'CLIENTE_RESP_ENDERECO'
                            ,'CLIENTE_RESP_BAIRRO'
                            ,'CLIENTE_RESP_MUNICIPIO'
                            ,'CLIENTE_RESP_UF'
                            ,'CLIENTE_RESP_CEP'
                            ,'CONTABILIDADE_ID'
                            ,'CLIENTE_BOLETO'
*/