import jwt from 'jsonwebtoken';

export const auth = {
  verifyToken: async (token: string): Promise<string> => {
    try {
      const decodedToken = jwt.decode(token);

      if (!decodedToken || typeof decodedToken === 'string') throw new Error('invalid token');

      const payload: any = jwt.verify(decodedToken.verify, process.env.JWT_SECRET as string, {
        audience: process.env.GOOGLE_ID as string,
      });

      if (!payload || typeof payload === 'string') throw new Error('Error payload');

      if (payload.email !== decodedToken.email) throw new Error('Error email');

      return payload.email;
    } catch (err) {
      console.log(err);
      throw new Error('verify error');
    }
  },
};
