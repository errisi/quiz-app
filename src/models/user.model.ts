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
  tableName: "users",
  timestamps: true,
})

export class Users extends Model {
  @AllowNull(false)
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id!: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  tgId!: string;

  @AllowNull(false)
  @Column({
    type: DataType.DOUBLE,
    defaultValue: Sequelize.literal("'0'::double precision"),
  })
  balance!: number;
}
