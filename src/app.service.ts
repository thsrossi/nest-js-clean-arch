import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

//gerenciamento de projetos

//criar um projeto - data - inicio - fim
//criar tarefas dentro do projeto - data - inicio - fim - projeto
