import { Model, DataTypes } from 'sequelize';
// Deve-se importar Model e os DataTypes do sequelize
import { sequelize } from '../instances/mysql';
// Importando a conexão com o banco de dados

// Criando uma interface de typescript para o model, que importa Model e DataTypes

interface InterfaceLugares extends Model {
    id: number;
    id_localizacao: number;
    nome: string;
    preco: number;
    estrelas: number;
    eat: number;
    drink: number;
    chill: number;
    veg: number;
    id_comida: number;
    id_bebida: number;
    id_passeio: number;
    id2_comida: number;
    id2_bebida: number;
    id2_passeio: number;
}

export const Lugar = sequelize.define<InterfaceLugares>('Lugar', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED
    },
    id_localizacao: {
        type: DataTypes.INTEGER.UNSIGNED,
        defaultValue: 0
    },
    nome: {
        type: DataTypes.STRING
    },
    preco: {
        type: DataTypes.INTEGER.UNSIGNED,
        defaultValue: 0
    },
    estrelas: {
        type: DataTypes.INTEGER.UNSIGNED,
        defaultValue: 0
    },
    eat: {
        type: DataTypes.INTEGER.UNSIGNED,
        defaultValue: 0
    },
    drink: {
        type: DataTypes.INTEGER.UNSIGNED,
        defaultValue: 0
    },
    chill: {
        type: DataTypes.INTEGER.UNSIGNED,
        defaultValue: 0
    },
    veg: {
        type: DataTypes.INTEGER.UNSIGNED,
        defaultValue: 0
    },
    id_comida: {
        type: DataTypes.INTEGER.UNSIGNED,
    },
    id_bebida: {
        type: DataTypes.INTEGER.UNSIGNED,
    },
    id_passeio: {
        type: DataTypes.INTEGER.UNSIGNED,
    },
    id2_comida: {
        type: DataTypes.INTEGER.UNSIGNED,
    },
    id2_bebida: {
        type: DataTypes.INTEGER.UNSIGNED,
    },
    id2_passeio: {
        type: DataTypes.INTEGER.UNSIGNED,
    }
}, {
    tableName: 'lugares',
    // Esse é o nome da tabela
    timestamps: false
    // Essa opção desativa o created_at e o updated_at
});


