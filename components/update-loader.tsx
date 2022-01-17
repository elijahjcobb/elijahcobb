import {GetServerSideProps} from "next";
import FS from "fs";
import matter from "gray-matter";

/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

export interface Update {
	url: string;
	title: string;
	date: string;
	description?: string;
	readMore: boolean;
}

export async function fetchUpdates(limit?: number): Promise<Update[]> {

	const files = FS.readdirSync("updates").map(v => "updates/" + v);
	const updates: Update[] = [];

	for (const f of files) {
		const data = FS.readFileSync(f).toString("utf8");
		const file = matter(data);
		const meta = file.data as {title: any, date: any, description: any};
		if (typeof meta.title !== "string") continue;
		if (typeof meta.date !== "string") continue;
		const url = encodeURI("/" + f.replace(".md", ""));
		updates.push({url, title: meta.title, date: meta.date, description: meta.description ?? "", readMore: file.content.length !== 0})
	}

	updates.sort((a, b) => {
		const aDate = new Date(a.date);
		const bDate = new Date(b.date);
		return (aDate < bDate) ? 1 : -1
	})

	if (limit) updates.splice(limit);

	return updates;
}