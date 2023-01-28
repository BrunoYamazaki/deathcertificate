const PatientRepository = require('../repositories/PatientRepository');

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

  store() {
    // Criar novo registro
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
