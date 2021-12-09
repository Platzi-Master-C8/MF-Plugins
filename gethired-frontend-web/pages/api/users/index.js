import Database from "../../../__mocks__/db";

const users = async(request, response) => {
  const db = new Database();
  const allEntries = await db.getAll();

  response.status(200).json({ data: allEntries });
}

export default users;