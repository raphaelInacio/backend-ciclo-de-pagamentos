const express = require('express')
const auth = require('./auth')

module.exports = function( server ){

    /*
    * Rotas abertas
     */
    
    const openApi = express.Router()
    server.use('/oapi', openApi)
    const AuthService = require('../api/user/authService')
    openApi.post('/login', AuthService.login)
    openApi.post('/signup', AuthService.signup)
    openApi.post('/validateToken', AuthService.validateToken)

    //API Routes
    const router = express.Router()
    server.use('/api', router)
    router.use(auth)
    //Rotas da API
    const billingCylcleService = require('../api/billingCycle/billingCycleService')
    billingCylcleService.register(router, '/billingCycles')

    const billingCycleSumariService = require('../api/billingSummary/billingSumaryService')
    router.route('/billingSumaryService').get(billingCycleSumariService.getSumary)
}