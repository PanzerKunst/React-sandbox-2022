import sql from './db';
import { Crag } from "../../../common/Crag";

export async function createCragsTable() {
  await sql`
    create table if not exists crags (
        id  serial primary key,
        name varchar(100) not null,
        location varchar(100) not null
    )`;
}

export async function dropCragsTable() {
  await sql`
    drop table if exists crags`;
}

export async function insertCrag({ name, location }: Crag) {
  await sql`
    insert into crags (name, location)
    values (${name}, ${location})`;
}

export async function selectAllCrags() {
  return sql`
    select id, name, location
    from crags`;
}
