import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('guestbook')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  findAll() { return this.appService.getMessages(); }

  @Post()
  create(@Body() body: any) { return this.appService.createMessage(body.name, body.message); }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) { return this.appService.updateMessage(id, body.message); }

  @Delete(':id')
  remove(@Param('id') id: string) { return this.appService.deleteMessage(id); }
}