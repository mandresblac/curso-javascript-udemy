const registrar = (req, res) => {
  const { email, password, nombre } = req.body;

  res.json({ msg: "Registrando usuario..." });
};

const perfil = (req, res) => {
  res.json({ msg: "Mostrando perfil" });
};

export { registrar, perfil };
