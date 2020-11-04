import {MigrationInterface, QueryRunner} from "typeorm";

export class RenameColumnsInCamelCase1604458564778 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameColumn('users', 'created_at', 'createdAt')
        await queryRunner.renameColumn('users', 'updated_at', 'updatedAt')
        await queryRunner.renameColumn('posts', 'created_at', 'createdAt')
        await queryRunner.renameColumn('posts', 'updated_at', 'updatedAt')
        await queryRunner.renameColumn('posts', 'author_id', 'authorId')
        await queryRunner.renameColumn('comments', 'created_at', 'createdAt')
        await queryRunner.renameColumn('comments', 'updated_at', 'updatedAt')
        await queryRunner.renameColumn('comments', 'author_id', 'authorId')
        await queryRunner.renameColumn('comments', 'post_id', 'postId')

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameColumn('users', 'createdAt', 'created_at')
        await queryRunner.renameColumn('users', 'updatedAt', 'updated_at')
        await queryRunner.renameColumn('posts', 'createdAt', 'created_at')
        await queryRunner.renameColumn('posts', 'updatedAt', 'updated_at')
        await queryRunner.renameColumn('posts', 'authorId', 'author_id')
        await queryRunner.renameColumn('comments', 'createdAt', 'created_at')
        await queryRunner.renameColumn('comments', 'updatedAt', 'updated_at')
        await queryRunner.renameColumn('comments', 'authorId', 'author_id')
        await queryRunner.renameColumn('comments', 'postId', 'post_id')
    }

}
