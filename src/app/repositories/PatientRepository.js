const { v4 } = require('uuid');

let patients = [
  {
    id: v4(),
    name: 'Gabriel',
    cpf: '999.000.111-33',
    disease: 'none',
    deathCause: 'shots',
    date: '35 days',
    category_id: v4(),
  },
  {
    id: v4(),
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

  findById(id) {
    return new Promise((resolve) => {
      resolve(patients.find((patient) => patient.id === id));
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      patients = patients.filter((patient) => patient.id !== id);
      resolve();
    });
  }

  create({
    cpf, name, disease, deathCause, date, category_id,
  }) {
    return new Promise((resolve) => {
      const newPatient = {
        id: v4(),
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

  update(id, {
    cpf, name, disease, deathCause, date, category_id,
  }) {
    return new Promise((resolve) => {
      const updatedPatient = {
        id,
        name,
        cpf,
        disease,
        deathCause,
        date,
        category_id,
      };

      patients = patients.map((patient) => (
        patient.id === id ? updatedPatient : patient
      ));

      resolve(updatedPatient);
    });
  }
}

module.exports = new PatientRepository();
