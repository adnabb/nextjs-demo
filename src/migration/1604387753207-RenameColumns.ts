import {MigrationInterface, QueryRunner} from "typeorm";

export class RenameColumns1604387753207 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameColumn('users', 'createdAt', 'created_at')
        await queryRunner.renameColumn('users', 'updatedAt', 'updated_at')
        await queryRunner.renameColumn('posts', 'createdAt', 'created_at')
        await queryRunner.renameColumn('posts', 'updatedAt', 'updated_at')
        await queryRunner.renameColumn('comments', 'createdAt', 'created_at')
        await queryRunner.renameColumn('comments', 'updatedAt', 'updated_at')

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameColumn('users', 'created_at', 'createdAt')
        await queryRunner.renameColumn('users', 'updated_at', 'updatedAt')
        await queryRunner.renameColumn('posts', 'created_at', 'createdAt')
        await queryRunner.renameColumn('posts', 'updated_at', 'updatedAt')
        await queryRunner.renameColumn('comments', 'created_at', 'createdAt')
        await queryRunner.renameColumn('comments', 'updated_at', 'updatedAt')
}

}
