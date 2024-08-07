import {Wn as logsSchema} from "../chunks/conditional-wrap.js";
import express from "express";
import {as, avroFunction} from "../entries/pages_catch-all.js";

const logs_router = express.Router()


/**
 * @swagger
 * components:
 *   schemas:
 *     logsSchema:
 *       type: object
 *       properties:
 *         maker:
 *           type: string
 *           description:
 *           example: ''
 *         makerScreener:
 *           type: object
 *           properties:
 *              buys:
 *                type: integer
 *              sells:
 *                type: integer
 *              volumeUsdBuy:
 *                type: number
 *              volumeUsdSell:
 *                type: number
 *              amountBuy:
 *                type: string
 *              amountSell:
 *                type: string
 *              balanceAmount:
 *                type: string
 *              balancePercentage:
 *                type: int
 *              firstSwap:
 *                type: number
 *              new:
 *                type: boolean
 *         buys:
 *           type: integer
 *           description: Count of buys
 *           example: 0
 *         sells:
 *           type: integer
 *           description: Count of sels
 *           example: 0
 *         volumeUsdBuy:
 *           type: integer
 *           example: 0
 *         volumeUsdSell:
 *           type: integer
 *           example: 0
 *         amountBuy:
 *           type: string
 *           example: ''
 *         amountSell:
 *           type: string
 *           example: ''
 *         balanceAmount:
 *           type: string
 *           nullable: true
 *         balancePercentage:
 *           type: string
 *           nullable: true
 *         firstSwap:
 *           type: integer
 *         lastSwap:
 *           type: integer
 */

/**
 * @swagger
 * /api/logs:
 *   post:
 *     summary: Deserialize incoming kafka avro message in json
 *     requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties: {}
 *               required: []
 *               example: '{"url": "http://io.dexscreener.com/"}'
 *     responses:
 *       200:
 *         description: Returns logs json object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/logsSchema'
 */
logs_router.route('/logs')
    .post( async (req, res) => {
        try{
            let message = await avroFunction(req.body.url, logsSchema)
            res.send(message);

            console.log("[-] Returned deserialized logs message:", message);
        }
        catch (e){
            console.log(e)
        }
});

export default logs_router