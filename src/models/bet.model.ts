import {
  DataType,
  Table,
  Model,
  AllowNull,
  PrimaryKey,
  Column,
  Sequelize,
} from "sequelize-typescript";

@Table({
  tableName: "bets",
  timestamps: false,
})

export class Bets extends Model {
  @AllowNull(false)
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id!: string;

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
  })
  bet!: number[];
}
