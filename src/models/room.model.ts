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
  tableName: "rooms",
  timestamps: true,
})

export class Rooms extends Model {
  @AllowNull(false)
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id!: string;

  @Column({
    type: DataType.STRING,
  })
  firstPlayerId!: string;

  @Column({
    type: DataType.STRING,
  })
  secondPlayerId!: string;

  @Column({
    type: DataType.INTEGER,
  })
  firstPlayerScore!: number;

  @Column({
    type: DataType.INTEGER,
  })
  secondPlayerScore!: number;

  @Column({
    type: DataType.BOOLEAN,
  })
  isBot!: boolean;

  @Column({
    type: DataType.STRING,
  })
  winnerId!: string;

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
  })
  bet!: number;
}
