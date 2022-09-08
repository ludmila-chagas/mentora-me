import Student from "../../../models/StudentModel";
import ListInterestService from "../../../services/interest/ListInterestService";

class DeleteInterestController {
  async delete(req, res) {
    try {
      const userId = req.user;

      const student = await Student.findOne({
        where: {
          user_id: userId,
        },
      });
      if (!student) {
        return res.status(401).json({ error: "Estudante não cadastrado" });
      }
      const { mentoringArea } = req.body;
      const areas = await ListInterestService.list();
      let interestArea;

      //Percorre o array de areas de mentoria e se encontrar uma igual a adicionada ele adiciona ao estudante
      areas.map((area) => {
        if (area.mentoring_area === mentoringArea) {
          student.removeInterests(area.id);
          interestArea = area.mentoring_area;
        }
      });
      if (!interestArea) {
        return res
          .status(401)
          .json({ error: "Area de Mentoria não encontrada" });
      }
      return res.status(200).json({ message: "sucesso" });
    } catch (error) {
      return res.status(401).json({ error: error.message });
    }
  }
}

export default new DeleteInterestController();
