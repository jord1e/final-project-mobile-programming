package nl.jrdie.quotebookapp.quotes;

import nl.jrdie.quotebookapp.entities.QuoteEntity;
import nl.jrdie.quotebookapp.gqlgenerated.types.Quote;
import nl.jrdie.quotebookapp.graphql.Relay;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.core.convert.converter.Converter;

@Mapper(
    componentModel = "spring",
    imports = {Relay.class})
public interface QuoteMapper extends Converter<QuoteEntity, Quote> {

  @SuppressWarnings("NullableProblems")
  @Mapping(target = "quotees", ignore = true)
  @Mapping(target = "id", expression = "java(Relay.toGlobalId(\"Quote\", source.getId()))")
  Quote convert(QuoteEntity source);
}
