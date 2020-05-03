import * as sinon from 'sinon'
import { expect } from 'chai'
import rootRouter from './router'
import Controller from '../controllers/controller'
import Repository from '../repositories/repository'

const repository = new Repository({ username: 'test', password: 'test342', dbName: 'measures'})
sinon.mock(repository)

const controller = new Controller(repository)
sinon.mock(controller)

const router = rootRouter(controller)

describe('ROUTER UNIT TEST', function() {

})
