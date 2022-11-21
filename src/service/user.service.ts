import config from '../lib/config/default';
import bcrypt from 'bcrypt'
import { createUser, findOneUser, userValidateQuery } from '../repo/user.repo';
import { sign } from '../utils/jwt';
import log from '../lib/logger';


const createUserService = async (data: {
    username: string,
    password: string,
}) => {
    const salt = await bcrypt.genSalt(config.get("saltWorkFactor") as number);
    const hash = await bcrypt.hash(data.password, salt);
    const user = await createUser({ username: data.username, password: hash });
    return user;
}
const userValidationService = async (data: {
    username: string,
    password: string,
}) => {
    const user = await findOneUser({ username: data.username });
    if (!user) {
        return false;
    }
    const isValid = await userValidateQuery({ user: user, password: data.password });
    if (!isValid) {
        return false;
    }
    return user;
}
const createUserTokenService =  (user: any):string => {
    const jwtTokenTime = config.get("jwtTokenTime") as string;
    let token = sign({ username: user.username }, { expiresIn: jwtTokenTime });
    return token;
}
export { createUserService, userValidationService,createUserTokenService }