import { Request, Response } from "express";
import { userService } from "../services/user.service";

export const UserController = {
    getAll : (req: Request, res: Response) => {
        res.json(userService.findAll())
    },
    getById : (req: Request, res: Response) => {
        const user = userService.findById(Number(req.params.id))
        user ? res.json(user) : res.status(404).json({message: "Usuario nao encontrado :3"})
    },
    create: (req: Request, res: Response) => {
        const {name, email} = req.body
        const user = userService.create(name, email)
        res.status(201).json(user)
    },
    update: (req: Request, res: Response) => {
        const {name, email} = req.body
        const user = userService.update(Number(req.params.id), name, email)
        user ? res.json(user) : res.status(404).json({message:"Usuario nao encontraddoo"})
    },
    delete: (req: Request, res: Response) => {
        const success = userService.delete(Number(req.params.id))
        success ? res.json({message: "usuario removido com sucesoidas"}) : res.status(404).json({message:"Usuario nao encontraddoo"})
    }
}