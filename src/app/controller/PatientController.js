const PatientRepository = require('../repositories/PatientRepository');
const isCpfValid = require('../../utils/isValidCpf');

class PatientController {
  async index(request, response) {
    // Listar todos os registros
    const patients = await PatientRepository.findAll();

    response.json(patients);
  }

  async show(request, response) {
    // Obter UM registro
    const { id } = request.params;

    const patient = await PatientRepository.findById(id);

    if (!patient) {
      return response.status(404).json({ error: 'Patient not found' });
    }

    response.json(patient);
  }

  async store(request, response) {
    // Criar novo registro
    const {
      name, cpf, disease, deathCause, date, category_id,
    } = request.body;

    if (!isCpfValid(cpf)) {
      return response.status(400).json({ error: 'cpf is invalid' });
    }

    if (!name || !cpf) {
      return response.status(400).json({ error: 'name or cpf is required' });
    }

    const patientExists = await PatientRepository.findByCpf(cpf);

    if (patientExists) {
      return response.status(400).json({ error: 'this cpf has already been registered' });
    }

    const patient = await PatientRepository.create({
      name, cpf, disease, deathCause, date, category_id,
    });

    response.json(patient);
  }

  update() {
    // Editar um registro
  }

  async delete(request, response) {
    // Deletar um registro
    const { id } = request.params;

    const patient = await PatientRepository.findById(id);

    if (!patient) {
      return response.status(404).json({ error: 'Patient not found' });
    }

    await PatientRepository.delete(id);
    // 204 no content
    response.sendStatus(204);
  }
}

module.exports = new PatientController();
