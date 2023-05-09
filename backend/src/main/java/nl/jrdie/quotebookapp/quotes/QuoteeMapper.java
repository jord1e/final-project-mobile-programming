package nl.jrdie.quotebookapp.quotes;

import nl.jrdie.quotebookapp.entities.QuoteeEntity;
import nl.jrdie.quotebookapp.gqlgenerated.types.Quotee;
import nl.jrdie.quotebookapp.graphql.Relay;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.core.convert.converter.Converter;

@Mapper(
    componentModel = "spring",
    imports = {Relay.class})
public interface QuoteeMapper extends Converter<QuoteeEntity, Quotee> {

  @SuppressWarnings("NullableProblems")
  @Mapping(target = "id", expression = "java(Relay.toGlobalId(\"Quotee\", source.getId()))")
  Quotee convert(QuoteeEntity source);
}
