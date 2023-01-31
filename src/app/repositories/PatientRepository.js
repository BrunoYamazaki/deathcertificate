const { v4 } = require('uuid');

let patients = [
  {
    name: 'Gabriel',
    cpf: '999.000.111-33',
    disease: 'none',
    deathCause: 'shots',
    date: '35 days',
    category_id: v4(),
  },
  {
    name: 'Castro',
    cpf: '922.330.121-34',
    disease: 'high blood pressure',
    deathCause: 'hearth attack',
    date: 'unknown',
    category_id: v4(),
  },
];

class PatientRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(patients);
    });
  }

  findByCpf(cpf) {
    return new Promise((resolve) => {
      resolve(patients.find((patient) => patient.cpf === cpf));
    });
  }

  delete(cpf) {
    return new Promise((resolve) => {
      patients = patients.filter((patient) => patient.cpf !== cpf);
      resolve();
    });
  }

  create({
    cpf, name, disease, deathCause, date, category_id,
  }) {
    return new Promise((resolve) => {
      const newPatient = {
        name,
        cpf,
        disease,
        deathCause,
        date,
        category_id,
      };
      patients.push(newPatient);
      resolve(newPatient);
    });
  }
}

module.exports = new PatientRepository();
