const express = require('express')

module.exports = function( server ){
    
    //API Routes
    const router = express.Router()
    server.use('/api', router)

    //Rotas da API
    const billingCylcleService = require('../api/billingCycle/billingCycleService')
    billingCylcleService.register(router, '/billingCycles')

    const billingCycleSumariService = require('../api/billingSummary/billingSumaryService')
    router.route('/billingSumaryService').get(billingCycleSumariService.getSumary)
}