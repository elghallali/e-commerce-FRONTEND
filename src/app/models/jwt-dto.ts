export class JwtDto {
  token: string | undefined;
  type: string | undefined;
  username: string | undefined;
  authorities: string[] | undefined;
}
