import { CidadeDTO } from './cidade.dto';
export interface EnderecoDTO {
    id : string;
    logradouro : String;
    numero : string;
    complemento : String;
    bairro : string;
    cep : String;
    cidade : CidadeDTO;
}