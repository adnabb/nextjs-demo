import { MigrationInterface, QueryRunner, Table, TableCheck, TableColumn } from "typeorm";

export class AddCreatedAtAndUpdatedAt1604386689312 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns('users', [
      new TableColumn({name: 'createdAt', type: 'timestamp', isNullable: false, default: 'now()'}),
      new TableColumn({name: 'updatedAt', type: 'timestamp', isNullable: false, default: 'now()'})
    ]) 
    await queryRunner.addColumns('posts', [
      new TableColumn({name: 'createdAt', type: 'timestamp', isNullable: false, default: 'now()'}),
      new TableColumn({name: 'updatedAt', type: 'timestamp', isNullable: false, default: 'now()'})
    ])
    await queryRunner.addColumns('comments', [
      new TableColumn({name: 'createdAt', type: 'timestamp', isNullable: false, default: 'now()'}),
      new TableColumn({name: 'updatedAt', type: 'timestamp', isNullable: false, default: 'now()'})
    ])

  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumns('users', [
      new TableColumn({name: 'createdAt', type: 'timestamp', isNullable: false, default: 'now()'}),
      new TableColumn({name: 'updatedAt', type: 'timestamp', isNullable: false, default: 'now()'})
    ])
    await queryRunner.dropColumns('posts', [
      new TableColumn({name: 'createdAt', type: 'timestamp', isNullable: false, default: 'now()'}),
      new TableColumn({name: 'updatedAt', type: 'timestamp', isNullable: false, default: 'now()'})
    ])
    await queryRunner.dropColumns('comments', [
      new TableColumn({name: 'createdAt', type: 'timestamp', isNullable: false, default: 'now()'}),
      new TableColumn({name: 'updatedAt', type: 'timestamp', isNullable: false, default: 'now()'})
    ])

  }

}
