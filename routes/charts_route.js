import {kn as chartsSchema} from "../chunks/conditional-wrap.js";
import express from "express";
import {avroFunction, D0t} from "../entries/pages_catch-all.js";


const chart_router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     bar:
 *       type: object
 *       properties:
 *         close:
 *           type: string
 *         closeUsd:
 *           type: string
 *         high:
 *           type: string
 *         highUsd:
 *           type: string
 *         low:
 *           type: string
 *         lowUsd:
 *           type: string
 *         maxBlockNumber:
 *           type: integer
 *           example: 0
 *         minBlockNumber:
 *           type: integer
 *           example: 0
 *         open:
 *           type: string
 *         openUsd:
 *           type: string
 *         timestamp:
 *           type: number
 *           example: 0.0
 *         volumeUsd:
 *           type: string
 *     chartSchema:
 *       type: object
 *       properties:
 *         bars:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/bar'
 *           nullable: true
 *         schemaVersion:
 *           type: string
 *           example: '1.0.0'
 */

/**
 * @swagger
 * /api/charts:
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
 *               
 *     responses:
 *       200:
 *         description: Returns charts json object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/chartSchema'
 */
chart_router.route('/charts')
    .post( async (req, res) => {
            try{
                    let message = await avroFunction(req.body.url, chartsSchema)
                    res.send(message);

                    console.log("[-] Returned deserialized logs message:", message);
            }
            catch (e){
                    console.log(e)
            }
});

export default chart_router