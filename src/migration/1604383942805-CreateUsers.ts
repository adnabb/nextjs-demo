import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1604383942805 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        return await queryRunner.createTable(new Table({
          name: 'users',
          columns: [
            {name: 'id', type: 'int', isGenerated: true, generationStrategy: 'increment', isPrimary: true, },
            {name: 'username', type: 'varchar'},
            {name: 'password', type: 'varchar'}
          ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      return await queryRunner.dropTable('users')
    }

}
