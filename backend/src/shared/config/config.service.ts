import { Injectable } from '@nestjs/common';
@Injectable()
export class ConfigService {

    get jwtConfig() {
        return { privateKey: "_h-PpBHPZUjxeFY??LFk!4h%b*VhNRw42MXKp49%w#H%aKqPEYGLK-*H2bdAtdAd76+fFDz9VW=@-tCjN9eB$J?kcuAQ7!q_BGp5b" };
    }
}
