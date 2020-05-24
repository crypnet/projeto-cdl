import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt, VerifiedCallback } from 'passport-jwt';
import { JwtPayload } from './jwt-payload.model';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from '../users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly usersService: UsersService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey:  "_h-PpBHPZUjxeFY??LFk!4h%b*VhNRw42MXKp49%w#H%aKqPEYGLK-*H2bdAtdAd76+fFDz9VW=@-tCjN9eB$J?kcuAQ7!q_BGp5b",
        });
    }

    async validate(payload: JwtPayload, done: VerifiedCallback) {
        const user = await this.usersService.getUserByEmail(payload.email);
        if (!user) {
            return done(new HttpException({}, HttpStatus.UNAUTHORIZED), false);
        }

        return done(null, user, payload.iat);
    }
}
