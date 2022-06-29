export class RetornoLogin {
  historicoSinistro: Sinistro[];
  dadosContratosAtivos: ContratoAtivo[];

  constructor(login: {
    historicoSinistro: Sinistro[];
    dadosContratosAtivos: ContratoAtivo[];
  }) {
    this.historicoSinistro = login.historicoSinistro;
    this.dadosContratosAtivos = login.dadosContratosAtivos;
  }
}

export class Sinistro {
  codSinistro: number;
  codContrato: number;
  condutor: Condutor;
  carro: Carro;
  cliente: Cliente;
  dataSinistro: string;
  descricaoOcorrido: string;
  terceiroEnvolvido: boolean;
  terceiroResponsavel: boolean;
  autorizoSeguro: boolean;
  terceiroIdentificado: boolean;
  terceiro: Terceiro;
  cep: string;
  logradouro: string;
  numero: number;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
  temReboque: boolean;
  reboque: Reboque;
  boEnviado: boolean;

  constructor(sinistro: {
    codSinistro: number;
    codContrato: number;
    condutor: Condutor;
    carro: Carro;
    cliente: Cliente;
    dataSinistro: string;
    descricaoOcorrido: string;
    terceiroEnvolvido: boolean;
    terceiroResponsavel: boolean;
    autorizoSeguro: boolean;
    terceiroIdentificado: boolean;
    terceiro: Terceiro;
    cep: string;
    logradouro: string;
    numero: number;
    complemento: string;
    bairro: string;
    cidade: string;
    uf: string;
    temReboque: boolean;
    reboque: Reboque;
    boEnviado: boolean;
  }) {
    this.codSinistro = sinistro.codSinistro;
    this.codContrato = sinistro.codContrato;
    this.condutor = sinistro.condutor;
    this.carro = sinistro.carro;
    this.cliente = sinistro.cliente;
    this.dataSinistro = sinistro.dataSinistro;
    this.descricaoOcorrido = sinistro.descricaoOcorrido;
    this.terceiroEnvolvido = sinistro.terceiroEnvolvido;
    this.terceiroResponsavel = sinistro.terceiroResponsavel;
    this.autorizoSeguro = sinistro.autorizoSeguro;
    this.terceiroIdentificado = sinistro.terceiroIdentificado;
    this.terceiro = sinistro.terceiro;
    this.cep = sinistro.cep;
    this.logradouro = sinistro.logradouro;
    this.numero = sinistro.numero;
    this.complemento = sinistro.complemento;
    this.bairro = sinistro.bairro;
    this.cidade = sinistro.cidade;
    this.uf = sinistro.uf;
    this.temReboque = sinistro.temReboque;
    this.reboque = sinistro.reboque;
    this.boEnviado = sinistro.boEnviado;
  }
}

export class Reboque {
  id: number;
  data?: string;
  agendar: boolean;
  enivarCarro?: boolean;
  cep: string;
  logradouro: string;
  numero: number;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
  idAgenciaDestino: number;

  constructor(reboque: {
    id: number;
    data?: string;
    agendar: boolean;
    enivarCarro?: boolean;
    cep: string;
    logradouro: string;
    numero: number;
    complemento: string;
    bairro: string;
    cidade: string;
    uf: string;
    idAgenciaDestino: number;
  }) {
    this.id = reboque.id;
    this.data = reboque.data;
    this.agendar = reboque.agendar;
    this.enivarCarro = reboque.enivarCarro;
    this.cep = reboque.cep;
    this.logradouro = reboque.logradouro;
    this.numero = reboque.numero;
    this.complemento = reboque.complemento;
    this.bairro = reboque.bairro;
    this.cidade = reboque.cidade;
    this.uf = reboque.uf;
    this.idAgenciaDestino = reboque.idAgenciaDestino;
  }
}

export class ContratoAtivo {
  codContrato: number;
  cliente: Cliente;
  veiculoAlugado: VeiculoAlugado;
  condutores: Condutor[]

  constructor(contrato: {
    codContrato: number;
    cliente: Cliente;
    veiculoAlugado: VeiculoAlugado;
    condutores: Condutor[]
  }) {
    this.codContrato = contrato.codContrato;
    this.cliente = contrato.cliente;
    this.veiculoAlugado = contrato.veiculoAlugado;
    this.condutores = contrato.condutores;
  }
}

export class VeiculoAlugado {
  id: number;
  placa: string;
  valorDiaria: number;
  capacidadeTanqueCombustivel: number;
  capacidadePortaMalas: number;
  marca: string;
  modelo: string;
  ano: number;
  categoria: string;
  tipoCombustivel: string;
  fotoVeiculo: string;
  carroDisponivel: boolean;
  idAgencia: number;

  constructor(veiculo: {
    id: number;
    placa: string;
    valorDiaria: number;
    capacidadeTanqueCombustivel: number;
    capacidadePortaMalas: number;
    marca: string;
    modelo: string;
    ano: number;
    categoria: string;
    tipoCombustivel: string;
    fotoVeiculo: string;
    carroDisponivel: boolean;
    idAgencia: number;
  }) {
    this.id = veiculo.id;
    this.placa = veiculo.placa;
    this.valorDiaria = veiculo.valorDiaria;
    this.capacidadeTanqueCombustivel = veiculo.capacidadeTanqueCombustivel;
    this.capacidadePortaMalas = veiculo.capacidadePortaMalas;
    this.marca = veiculo.marca;
    this.modelo = veiculo.modelo;
    this.ano = veiculo.ano;
    this.categoria = veiculo.categoria;
    this.tipoCombustivel = veiculo.tipoCombustivel;
    this.fotoVeiculo = veiculo.fotoVeiculo;
    this.carroDisponivel = veiculo.carroDisponivel;
    this.idAgencia = veiculo.idAgencia;
  }
}

export class Terceiro {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  codSinistro?: number;

  constructor(terceiro: {
    id: number;
    nome: string;
    email: string;
    telefone: string;
  }) {
    this.id = terceiro.id;
    this.nome = terceiro.nome;
    this.email = terceiro.email;
    this.telefone = terceiro.telefone;
  }
}

export class Cliente {
  id: number;
  login: string;
  senha: string;
  passwordHash: string;
  passwordSalt: string;
  role: number;
  nome: string;
  cpf: string;
  data_nasc: string;
  celular: string;
  email: string;

  constructor(cliente: {
    id: number;
    login: string;
    senha: string;
    passwordHash: string;
    passwordSalt: string;
    role: number;
    nome: string;
    cpf: string;
    data_nasc: string;
    celular: string;
    email: string;
  }) {
    this.id = cliente.id;
    this.login = cliente.login;
    this.senha = cliente.senha;
    this.passwordHash = cliente.passwordHash;
    this.passwordSalt = cliente.passwordSalt;
    this.role = cliente.role;
    this.nome = cliente.nome;
    this.cpf = cliente.cpf;
    this.data_nasc = cliente.data_nasc;
    this.celular = cliente.celular;
    this.email = cliente.email;
  }
}

export class Carro {
  id: number;
  placa: string;
  valorDiaria: number;
  capacidadeTanqueCombustivel: number;
  capacidadePortaMalas: number;
  marca: string;
  modelo: string;
  ano: number;
  categoria: string;
  tipoCombustivel: string;
  fotoVeiculo: string;
  carroDisponivel: boolean;
  idAgencia: number;

  constructor(carro: {
    id: number;
    placa: string;
    valorDiaria: number;
    capacidadeTanqueCombustivel: number;
    capacidadePortaMalas: number;
    marca: string;
    modelo: string;
    ano: number;
    categoria: string;
    tipoCombustivel: string;
    fotoVeiculo: string;
    carroDisponivel: boolean;
    idAgencia: number;
  }) {
    this.id = carro.id;
    this.placa = carro.placa;
    this.valorDiaria = carro.valorDiaria;
    this.capacidadeTanqueCombustivel = carro.capacidadeTanqueCombustivel;
    this.capacidadePortaMalas = carro.capacidadePortaMalas;
    this.marca = carro.marca;
    this.modelo = carro.modelo;
    this.ano = carro.ano;
    this.categoria = carro.categoria;
    this.tipoCombustivel = carro.tipoCombustivel;
    this.fotoVeiculo = carro.fotoVeiculo;
    this.carroDisponivel = carro.carroDisponivel;
    this.idAgencia = carro.idAgencia;
  }
}

export class Condutor {
  id: number;
  codContrato: number;
  nome: string;
  cpf: string;
  data_nasc: string;
  celular: string;
  email: string;

  constructor(condutor: {
    id: number;
    codContrato: number;
    nome: string;
    cpf: string;
    data_nasc: string;
    celular: string;
    email: string;
  }) {
    this.id = condutor.id;
    this.codContrato = condutor.codContrato;
    this.nome = condutor.nome;
    this.cpf = condutor.cpf;
    this.data_nasc = condutor.data_nasc;
    this.celular = condutor.celular;
    this.email = condutor.email;
  }
}

export class CadastroUsuario {
  senha: string;
  nome: string;
  cpf: string;
  data_nasc: string;
  celular: string;
  email: string;

  constructor(cadastro: {
    senha: string;
    nome: string;
    cpf: string;
    data_nasc: string;
    celular: string;
    email: string;
  }) {
    this.senha = cadastro.senha;
    this.nome = cadastro.nome;
    this.cpf = cadastro.cpf;
    this.data_nasc = cadastro.data_nasc;
    this.celular = cadastro.celular;
    this.email = cadastro.email;
  }
}

export class RegisterClaim {
  codContrato: number;
  codVeiculo: number;
  codCliente: number;
  codCondutorResponsavel: number;
  dataSinistro: string;
  descricaoSinistro: string;
  cep: string;
  logradouro: string;
  numero: number;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
  terceiroEnvolvido: boolean;
  terceiroIdentificado: boolean;
  terceiros: Terceiro[];
  terceiroResponsavel: boolean;
  autorizoSeguro: boolean;
  status: string;
  temRoboque: boolean;
  reboque: Reboque;
  boEnviado: boolean;

  constructor(registerClaim: {
    codContrato: number;
    codVeiculo: number;
    codCliente: number;
    codCondutorResponsavel: number;
    dataSinistro: string;
    descricaoSinistro: string;
    cep: string;
    logradouro: string;
    numero: number;
    complemento: string;
    bairro: string;
    cidade: string;
    uf: string;
    terceiroEnvolvido: boolean;
    terceiroIdentificado: boolean;
    terceiros: Terceiro[];
    terceiroResponsavel: boolean;
    autorizoSeguro: boolean;
    status: string;
    temRoboque: boolean;
    reboque: Reboque;
    boEnviado: boolean;
  }) {
    this.codContrato = registerClaim.codContrato;
    this.codVeiculo = registerClaim.codVeiculo;
    this.codCliente = registerClaim.codCliente;
    this.codCondutorResponsavel = registerClaim.codCondutorResponsavel;
    this.dataSinistro = registerClaim.dataSinistro;
    this.descricaoSinistro = registerClaim.descricaoSinistro;
    this.cep = registerClaim.cep;
    this.logradouro = registerClaim.logradouro;
    this.numero = registerClaim.numero;
    this.complemento = registerClaim.complemento;
    this.bairro = registerClaim.bairro;
    this.cidade = registerClaim.cidade;
    this.uf = registerClaim.uf;
    this.terceiroEnvolvido = registerClaim.terceiroEnvolvido;
    this.terceiroIdentificado = registerClaim.terceiroIdentificado;
    this.terceiros = registerClaim.terceiros;
    this.terceiroResponsavel = registerClaim.terceiroResponsavel;
    this.autorizoSeguro = registerClaim.autorizoSeguro;
    this.status = registerClaim.status;
    this.temRoboque = registerClaim.temRoboque;
    this.reboque = registerClaim.reboque;
    this.boEnviado = registerClaim.boEnviado;
  }
}

export class BuscaCep {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;

  constructor(busca: {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    ibge: string;
    gia: string;
    ddd: string;
    siafi: string;
  }) {
    this.cep = busca.cep;
    this.logradouro = busca.logradouro;
    this.complemento = busca.complemento;
    this.bairro = busca.bairro;
    this.localidade = busca.localidade;
    this.uf = busca.uf;
    this.ibge = busca.ibge;
    this.gia = busca.gia;
    this.ddd = busca.ddd;
    this.siafi = busca.siafi;
  }
}

export class UpdateRegisterClaim {
  id: number;
  codContrato: number;
  codVeiculo: number;
  codCliente: number;
  codCondutorResponsavel: number;
  dataSinistro: string;
  descricaoSinistro: string;
  cep: string;
  logradouro: string;
  numero: number;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
  terceiroEnvolvido: boolean;
  terceiroIdentificado: boolean;
  codTerceiro: number;
  terceiroResponsavel: boolean;
  autorizoSeguro: boolean;
  temRoboque: boolean;
  codReboque: number;
  boEnviado: boolean;

  constructor(update: {
    id: number;
    codContrato: number;
    codVeiculo: number;
    codCliente: number;
    codCondutorResponsavel: number;
    dataSinistro: string;
    descricaoSinistro: string;
    cep: string;
    logradouro: string;
    numero: number;
    complemento: string;
    bairro: string;
    cidade: string;
    uf: string;
    terceiroEnvolvido: boolean;
    terceiroIdentificado: boolean;
    codTerceiro: number;
    terceiroResponsavel: boolean;
    autorizoSeguro: boolean;
    temRoboque: boolean;
    codReboque: number;
    boEnviado: boolean;
  }) {
    this.id = update.id;
    this.codContrato = update.codContrato;
    this.codVeiculo = update.codVeiculo;
    this.codCliente = update.codCliente;
    this.codCondutorResponsavel = update.codCondutorResponsavel;
    this.dataSinistro = update.dataSinistro;
    this.descricaoSinistro = update.descricaoSinistro;
    this.cep = update.cep;
    this.logradouro = update.logradouro;
    this.numero = update.numero;
    this.complemento = update.complemento;
    this.bairro = update.bairro;
    this.cidade = update.cidade;
    this.uf = update.uf;
    this.terceiroEnvolvido = update.terceiroEnvolvido;
    this.terceiroIdentificado = update.terceiroIdentificado;
    this.codTerceiro = update.codTerceiro;
    this.terceiroResponsavel = update.terceiroResponsavel;
    this.autorizoSeguro = update.autorizoSeguro;
    this.temRoboque = update.temRoboque;
    this.codReboque = update.codReboque;
    this.boEnviado = update.boEnviado;
  }
}