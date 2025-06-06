import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const server = new McpServer({
  name: "test",
  version: "1.0.0",
});

server.tool(
  "workana-tool",
  "tool get proposal to Workana",
  {
    city: z.string().describe("city name"),
  },
  async ({ city }) => {
    return {
      content: [
        {
          type: "text",
          text: `El clima de ${city} es soleado`,
        },
      ],
    };
  }
);

const transport = new StdioServerTransport();
await server.connect(transport);
