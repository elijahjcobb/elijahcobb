/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */
import {Education} from "../types";

export const educations: Education[] = [
	{
		college: "Michigan Technological University",
		img: "./mtu-logo.png",
		degrees: [
			{
				level: "Doctoral Degree",
				major: "Computer Science & Robotics",
				start: "2021",
				end: "2024 (Expected)"
			},
			{
				level: "Master's Degree",
				major: "Computer Science & Robotics",
				start: "2021",
				end: "2022 (Expected)"
			},
			{
				level: "Bachelor's Degree",
				major: "Computer Science",
				gpa: "3.61",
				start: "2018",
				end: "2021"
			}
		]
	},
	{
		college: "Northwestern Michigan College",
		img: "./nmc-logo.png",
		degrees: [
			{
				major: "Engineering",
				start: "2017",
				end: "2018"
			}
		]
	}
];
