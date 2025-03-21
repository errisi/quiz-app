import {
  DataType,
  Table,
  Model,
  AllowNull,
  PrimaryKey,
  Column,
} from "sequelize-typescript";

@Table({
  tableName: "orders",
  timestamps: true,
})
export class Orders extends Model {
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
  invoiceId!: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  userId!: string;

  @AllowNull(false)
  @Column({
    type: DataType.DATE,
  })
  expire!: Date;

  @AllowNull(false)
  @Column({
    type: DataType.JSONB,
  })
  payment!: {
    cryptocurrency: string;
    address: string;
    price: number;
    servicePrice: number;
    priceCrypto: number;
    expire: string;
    fee: {
      fee: number;
      fee_usd: number;
      service_fee: number;
      service_fee_usd: number;
    }
  };
}
