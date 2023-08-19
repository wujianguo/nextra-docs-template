import "reflect-metadata";
import { NestFactory } from '@nestjs/core';
import { NextApiHandler } from "next";
import { INestApplication } from '@nestjs/common';
import * as http from 'http';
import { AppModule } from './app.module';

let app: INestApplication;

export async function getApp(): Promise<INestApplication> {
  if (!app) {
    app = await NestFactory.create(AppModule, { bodyParser: false});
    app.setGlobalPrefix('api');
    app.init();
  }
  return app;
}

export async function getListener() {
  const app = await getApp();
  const server: http.Server = app.getHttpServer();
  const [ listener ] = server.listeners("request") as NextApiHandler[];
  return listener;
}
