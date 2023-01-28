const { v4 } = require('uuid');

let patients = [
  {
    id: v4(),
    name: 'Gabriel',
    disease: 'none',
    deatCause: 'shots',
    deathTime: '35 days',
    category: 'external cause',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Castro',
    disease: 'high blood pressure',
    deatCause: 'hearth attack',
    deathTime: 'unknown',
    category: 'natural cause',
    category_id: v4(),
  },
];

class PatientRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(patients);
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
}

module.exports = new PatientRepository();
