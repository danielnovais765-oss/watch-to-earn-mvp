import bcrypt from 'bcryptjs';
import type { FastifyInstance, FastifyRequest } from 'fastify';
export async function hashPassword(v:string){return bcrypt.hash(v,12)}
export async function verifyPassword(v:string,h:string){return bcrypt.compare(v,h)}
export function userId(req:FastifyRequest){return (req.user as {sub:string}).sub}
export async function auth(app:FastifyInstance, req:FastifyRequest){await req.jwtVerify()}
