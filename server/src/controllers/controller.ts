import { Request, Response } from 'express'
import Repository from '../repositories/repository'

class Controller {
	private Repository: Repository

  constructor(Repository: Repository) {
		this.Repository = Repository
	}

}

export default Controller
