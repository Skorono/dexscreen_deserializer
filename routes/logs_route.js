import {Wn as logsSchema} from "../chunks/conditional-wrap.js";
import express from "express";

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
 *   parameters:
 *     - in: body
 *       name: message
 *       schema:
 *         type: string
 *   post:
 *     summary: Deserialize incoming kafka avro message in json
 *     consumes:
 *         - application/octet-stream
 *     responses:
 *       200:
 *         description: Returns logs json object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/logsSchema'
 */
logs_router.route('/logs')
    .post((req, res) => {
        try{
            let message_bytes = req.body.buffer
            let message = logsSchema.safeFromBuffer(message_bytes)
            res.send(message);

            console.log("[-] Returned deserialized logs message:", message);
        }
        catch (e){
            console.log(e)
        }
});

export default logs_router