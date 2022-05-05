import express from 'express'
import nodemailer from 'nodemailer'
import { prisma } from './prisma'

const app = express()

app.use(express.json())

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "f86a31ee79b567",
    pass: "2488fef7988c6f"
  }
});

app.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot} = req.body

  const feedback = await prisma.feedback.create({
    data: {
      type: type,
      comment: comment,
      screenshot: screenshot
    }
  })

  await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Gabriel Passos <kooujinproductions@gmail.com>',
    subject: 'Novo Feedback criado!',
    html: [
      `<div style="font-family: sans-serif; font-size:16px; color: #111;">`,
      `<p>Tipo do Feedback: ${type}</p>`,
      `<p>Comentário ${comment}</p>`,
      `<div>`
    ].join('\n')
  })

  return res.status(201).json({feedback})
  })

app.listen(4444, () => {
  console.log('HTTP server listening on')
})