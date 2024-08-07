//import {Tn as chartsSchema} from "../conditional-wrap.js";
import express from "express";


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
 *     summary: Deserializer incoming kafka avro message in json
 *     responses:
 *       200:
 *         description: Return charts json object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/chartSchema'
 */
chart_router.route('/charts').post( (req, res) => {
    let message_bytes = Buffer.from(req.body.message_text, 'utf-8')
  //  let message = chartsSchema.safeFromBuffer(message_bytes)
    //res.send(message)
    
    //console.log("[-] Returned deserialized chart message:", message)
});

export default chart_router