import React from "react";
import useTitle from "../../hooks/useTitle";
import { useNavigation } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const Blogs = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoadingSpinner></LoadingSpinner>;
  }
  useTitle("Blogs");
  return (
    <div className="mt-10 my-container py-20">
      <p className="font-bold text-2xl">
        Question - 1 : What is an access token and refresh token? How do they
        work and where should we store them on the client-side?
      </p>
      <p className="font-semibold text-xl">Answer : </p>
      <p className="text-xl">
        An access token and refresh token are commonly used in authentication
        systems to grant and manage user access to protected resources. Here's
        an overview of what they are and how they work: <br />
        1.Access Token: An access token is a credential that represents the
        authorization granted to a client (such as a user or an application) to
        access specific resources or perform certain actions. <br />
        2.Refresh Token: A refresh token is a long-lived credential that is used
        to obtain a new access token without requiring the user to
        reauthenticate. It is typically issued alongside the access token and
        has a longer expiration time. <br />
        We should store them in a secure HTTP-only cookie or a browser's local
        storage can also be an option.
      </p>

      <p className="font-bold text-2xl">
        Question - 2 : Compare SQL and NoSQL databases?
      </p>
      <p className="font-semibold text-xl">Answer : </p>
      <p className="text-xl">
        SQL (Structured Query Language) and NoSQL (Not Only SQL) are two
        different types of database management systems with distinct
        characteristics and use cases. Here's a comparison between SQL and NoSQL
        databases: <br />
        <br />
        SQL Databases: <br />
        Structure: SQL databases are based on a rigid, predefined schema that
        defines the structure of the data. They use tables with fixed columns
        and rows to organize and store data in a tabular format. <br />
        Relationships: SQL databases support relationships between tables
        through foreign keys, enabling complex queries and joining tables to
        retrieve related data.
        <br />
        NoSQL Databases: <br />
        Flexibility: NoSQL databases offer flexible schemas or schema-less
        designs. They can handle unstructured, semi-structured, or evolving data
        formats more easily than SQL databases. <br />
        Performance: NoSQL databases prioritize performance and can achieve high
        throughput and low latency. They often use denormalized data models,
        caching mechanisms, and distributed architectures to optimize
        performance.
      </p>

      <p className="font-bold text-2xl">
        Question - 3 : What is express js? What is Nest JS?
      </p>
      <p className="font-semibold text-xl">Answer : </p>
      <p className="text-xl">
        Express.js and Nest.js are both popular JavaScript frameworks used for
        building server-side applications <br />
        Express.js: Express.js is a minimalistic and flexible web application
        framework for Node.js. It provides a simple and intuitive API for
        building web applications and APIs. Express.js allows developers to
        handle HTTP requests, define routes, manage middleware, and render
        dynamic views. <br /> <br />
        Nest.js: Nest.js is a progressive, opinionated, and powerful Node.js
        framework for building scalable and maintainable server-side
        applications. It is built with TypeScript and takes advantage of its
        strong typing features. Nest.js follows the architectural pattern of
        "modularity" and is heavily inspired by Angular, providing decorators,
        dependency injection, and a modular structure.
      </p>

      <p className="font-bold text-2xl">
        Question - 4 : What is MongoDB aggregate and how does it work?
      </p>
      <p className="font-semibold text-xl">Answer : </p>
      <p className="text-xl">
        MongoDB aggregation is a way of processing a large number of documents
        in a collection by means of passing them through different stages. The
        stages make up what is known as a pipeline. The stages in a pipeline can
        filter, sort, group, reshape and modify documents that pass through the
        pipeline. <br />
        The aggregate operation works by defining a pipeline, which is an array
        of stages. Each stage in the pipeline performs a specific operation on
        the documents as they flow through the pipeline. The stages are applied
        sequentially, with the output of one stage serving as the input for the
        next stage.
      </p>
    </div>
  );
};

export default Blogs;
