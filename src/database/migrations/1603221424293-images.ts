// import { MigrationInterface, QueryRunner, Table } from "typeorm";
// import { ForeignKeyMetadata } from "typeorm/metadata/ForeignKeyMetadata";

// export class images1603221424293 implements MigrationInterface {
//   public async up(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.createTable(
//       new Table({
//         name: "images",
//         columns: [
//           {
//             name: "id_image",
//             type: "integer",
//             unsigned: true,
//             isPrimary: true,
//             isGenerated: true,
//             generationStrategy: "increment",
//           },
//           {
//             name: "path",
//             type: "varchar",
//           },
//           {
//             name: "post_images",
//             type: "integer",
//           },
//         ],
//         foreignKeys: [
//           {
//             name: "post_images",
//             columnNames: ["posts_from_users"],
//             referencedColumnNames: "users",
//             referencedTableName: ["id_post"],
//           },
//         ],
//       })
//     );
//   }

//   public async down(queryRunner: QueryRunner): Promise<void> {}
// }
