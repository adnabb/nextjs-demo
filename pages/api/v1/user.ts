
import 'reflect-metadata';
import md5 from "md5";
import { NextApiHandler } from "next";
import getDatabaseConnection from "../../../lib/getDatabaseConnection";
import { User } from "../../../src/entity/User";

const saveUser: NextApiHandler = async (req, res) => {
  if (req.method === 'POST') {
    const { username, password, passwordConfirm } = req.body

    const user = new User()
    user.username = username.trim()
    user.password_input = password.trim()
    user.password = md5(password.trim())
    user.passwordConfirm_input = passwordConfirm.trim()

    await user.validate()
    const hasError = user.hasError()
    if (hasError) {
      res.status(422).json(user.errors)
    } else {
      const { manager } = await getDatabaseConnection()
      await manager.save(user)
      res.status(200).json({ username })
    }
  }
}

export default saveUser
