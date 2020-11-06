
import 'reflect-metadata';
import md5 from "md5";
import { NextApiHandler } from "next";
import getDatabaseConnection from "../../../lib/getDatabaseConnection";
import { User } from "../../../src/entity/User";

const saveUser: NextApiHandler = async(req, res) => {
  if (req.method === 'POST') {
    const {username, password, passwordConfirm} = req.body
    const error = {
      username: [] as string[],
      password: [] as string[],
      passwordConfirm: [] as string[]
    }
    if (!(username.trim())) {
      error.username.push('用户名不能为空')
    } else if (!(/\w+/.test(username))) {
      error.username.push('用户名不合法')
    } else if (!(password.trim())) {
      error.password.push('密码不能为空')
    } else if (passwordConfirm.trim() !==  password.trim()) {
      error.passwordConfirm.push('两次密码不相同')
    }

    const hasError = !!(Object.values(error).find(v => v.length > 0))
    if (hasError) {
      res.status(422).json(error)
    } else {
      const {manager} = await getDatabaseConnection()
      const user = new User()
      user.username = username.trim()
      user.password = md5(password.trim())
      await manager.save(user)
      res.status(200).json({ username })
    }
  }
}

export default saveUser
